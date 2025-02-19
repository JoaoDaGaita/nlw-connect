import Image from 'next/image'

import { getRanking } from '@/http/api'

import cooper from '../../../assets/cooper.svg'
import gold from '../../../assets/gold.svg'
import silver from '../../../assets/silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Raking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((rank, index) => {
          const rankPosition = index + 1
          return (
            <div
              key={rank.id}
              className="relative rounded-xl bg-gray-700 border border-gray-500 p-5 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankPosition}º</span> |{' '}
                {rank.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {rank.score}
              </span>

              {rankPosition === 1 && (
                <Image src={gold} alt="" className="absolute right-8 top-0" />
              )}
              {rankPosition === 2 && (
                <Image src={silver} alt="" className="absolute right-8 top-0" />
              )}
              {rankPosition === 3 && (
                <Image src={cooper} alt="" className="absolute right-8 top-0" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
