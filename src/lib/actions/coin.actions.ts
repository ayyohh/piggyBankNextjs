'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import Coin from '@/lib/database/models/coin.model'
import User from '@/lib/database/models/user.model'
import Category from '@/lib/database/models/category.model'
import { handleError } from '@/lib/utils'

import {
  DeleteCoinParams,
  GetCoinsByUserParams,
  addCoinParams,
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
export async function getCoinById(coinId: string) {
  try {
    await connectToDatabase()

    const coin = await Coin.findById(coinId);

    if (!coin) throw new Error('Coin not found')

    return JSON.parse(JSON.stringify(coin))
  } catch (error) {
    handleError(error)
  }
}

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
export async function deleteCoin({ coinId, path }: DeleteCoinParams) {
  try {
    await connectToDatabase()

    const deletedCoin = await Coin.findByIdAndDelete(coinId);
    if (deletedCoin) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}


// GET COINS BY OWNER
export async function getCoinsByUser(userId: string) {
  try {
    await connectToDatabase()

  const conditions = { owner: userId }
   const coinsQuery = Coin.find(conditions)
      .sort({ createdAt: 'desc' })

    const coins = await coinsQuery

    return { data: JSON.parse(JSON.stringify(coins)) }
  } catch (error) {
    handleError(error)
  }
}
