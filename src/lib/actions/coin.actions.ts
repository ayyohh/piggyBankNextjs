'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import Coin from '@/lib/database/models/coin.model'
import User from '@/lib/database/models/user.model'
import Category from '@/lib/database/models/category.model'
import { handleError } from '@/lib/utils'

import {
  //UpdateEventParams,
  //DeleteEventParams,
  //GetAllEventsParams,
  //GetEventsByUserParams,
  //GetRelatedEventsByCategoryParams,
  addCoinParams,
  //GetAllCoinsParams,
} from '@/types'



// CREATE
export async function addCoin({ userId, coin, path }: addCoinParams) {
  try {
    await connectToDatabase()

    const owner = await User.findById(userId)
    if (!owner) throw new Error('Owner not found')

    console.log(userId);

    const newCoin = await Coin.create({ coin, owner: userId })
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newCoin))
  } catch (error) {
    handleError(error)
  }
}

// GET ONE EVENT BY ID
//export async function getCoinById(eventId: string) {
  //try {
    //await connectToDatabase()

//    const event = await populateEvent(Coin.findById(eventId))

  //  if (!event) throw new Error('Event not found')

    //return JSON.parse(JSON.stringify(event))
  //} catch (error) {
   // handleError(error)
  //}
//}

// UPDATE
//export async function updateCoin({ userId, event, path }: UpdateCoinParams) {
 // try {
  //  await connectToDatabase()

//    const eventToUpdate = await Coin.findById(event._id)
 //   if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
   //   throw new Error('Unauthorized or event not found')
    //}

 //   const updatedCoin = await Coin.findByIdAndUpdate(
 //     event._id,
 //     { ...event, category: event.categoryId },
  //    { new: true }
   // )
   // revalidatePath(path)

   // return JSON.parse(JSON.stringify(updatedCoin))
 // } catch (error) {
   // handleError(error)
 // }
//}

// DELETE
//export async function deleteCoin({ eventId, path }: DeleteCoinParams) {
//  try {
 //   await connectToDatabase()

   // const deletedCoin = await Coin.findByIdAndDelete(eventId)
   // if (deletedEvent) revalidatePath(path)
  //} catch (error) {
  //  handleError(error)
  //}
//}

// GET ALL EVENTS
//export async function getAllCoins({ query, limit = 6, page, category }: GetAllCoinsParams) {
 // try {
  //  await connectToDatabase()

   // const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
   // const categoryCondition = category ? await getCategoryByName(category) : null
   // const conditions = {
   ///   $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
   // }

   // const skipAmount = (Number(page) - 1) * limit
    //const eventsQuery = Coin.find(conditions)
    //  .sort({ createdAt: 'desc' })
     // .skip(skipAmount)
     /// .limit(limit)

//    const events = await populateEvent(eventsQuery)
  //  const eventsCount = await Coin.countDocuments(conditions)
//
  //  return {
   //   data: JSON.parse(JSON.stringify(events)),
     // totalPages: Math.ceil(eventsCount / limit),
 //   }
 // } catch (error) {
 //   handleError(error)
 // }
//}

// GET EVENTS BY ORGANIZER
//export async function getEventsByUser({ userId, limit = 6, page }: GetEventsByUserParams) {
 // try {
  //  await connectToDatabase()

//    const conditions = { organizer: userId }
  //  const skipAmount = (page - 1) * limit
//   const eventsQuery = Coin.find(conditions)
  //    .sort({ createdAt: 'desc' })
    //  .skip(skipAmount)
      //.limit(limit)

//    const events = await populateEvent(eventsQuery)
//    const eventsCount = await Event.countDocuments(conditions)

  //  return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
 // } catch (error) {
  //  handleError(error)
  //}
//}

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
//export async function getRelatedEventsByCategory({
//  categoryId,
 // eventId,
 // limit = 3,
 // page = 1,
//}: GetRelatedEventsByCategoryParams) {
 // try {
  //  await connectToDatabase()

    //const skipAmount = (Number(page) - 1) * limit
   // const conditions = { $and: [{ category: categoryId }, { _id: { $ne: eventId } }] }

   // const eventsQuery = Event.find(conditions)
     // .sort({ createdAt: 'desc' })
 //     .skip(skipAmount)
   //   .limit(limit)

   // const events = await populateEvent(eventsQuery)
   // const eventsCount = await Event.countDocuments(conditions)

 //   return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
 // } catch (error) {
 //   handleError(error)
 // }
//}