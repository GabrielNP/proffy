import express from 'express';

import convertHourToMinutes from './utils/convertHoursToMinutes';
import db from './database/connection';

const routes = express.Router();

/* Http Methods:
 *  GET, POST, DELETE, PUT
 *
 * Params:
 *  Request body: data to create/update a registry; used in POST; Ex: { name: "Gabriel", age: 24 }
 *  Route Params: identify resource I want to update/delete; used on PUT/DELETE; Ex: /users/:id
 *  Query Params: identify or determine some parameters I want to get; used on GET; Ex: /users?page=2&sort=name
 */

 interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
 }

routes.post('/classes', async (request, response) => {
   const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
   } = request.body;

   const trx = await db.transaction();

   try {
      const insertdUsersIds = await trx('users').insert({
         name,
         avatar,
         whatsapp,
         bio,
      });
      
      const user_id = insertdUsersIds[0];
      
      const insertedClassesId = await trx('classes').insert({
         subject,
         cost,
         user_id,
      });
      
      const class_id = insertedClassesId[0];
   
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
         return {
            class_id,
            week_day: scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to: convertHourToMinutes(scheduleItem.to),
         }
      });
   
      await trx('class_schedule').insert(classSchedule);
   
      await trx.commit();
   
      return response.status(201).send();

   } catch (err) {
      trx.rollback();

      return response.status(400).json({
         error: 'Unexpected error while creating new class'
      });
   }
  
});

export default routes;