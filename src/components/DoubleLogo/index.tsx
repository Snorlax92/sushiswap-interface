import { Currency } from '@sushiswap/sdk'
import CurrencyLogo from '../CurrencyLogo'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div<{ margin: boolean; sizeraw: number }>`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-right: ${({ sizeraw, margin }) => margin && (sizeraw / 3 + 8).toString() + 'px'};
`

interface DoubleCurrencyLogoProps {
  margin?: boolean
  size?: number
  currency0?: Currency
  currency1?: Currency
  squared?: boolean
}

const HigherLogo = styled(CurrencyLogo)`
  z-index: 2;
`
const CoveredLogo = styled(CurrencyLogo)<{ sizeraw: number }>`
  position: absolute;
  left: ${({ sizeraw }) => '-' + (sizeraw / 2).toString() + 'px'} !important;
`

export default function DoubleCurrencyLogo({
  currency0,
  currency1,
  size = 16,
  margin = false,
  squared = true,
}: DoubleCurrencyLogoProps) {
  return (
    <div className="flex space-x-2">
      <div className="flex items-center ">
        <CurrencyLogo currency={currency0} size={size.toString() + 'px'} squared={squared} />
      </div>
      <div className="flex items-center">
        <CurrencyLogo currency={currency1} size={size.toString() + 'px'} squared={squared} />
      </div>
    </div>
  )
  // return (
  //     <Wrapper sizeraw={size} margin={margin}>
  //         {currency0 && (
  //             <HigherLogo
  //                 currency={currency0}
  //                 size={size.toString() + 'px'}
  //                 squared={squared}
  //             />
  //         )}
  //         {currency1 && (
  //             <CoveredLogo
  //                 currency={currency1}
  //                 size={size.toString() + 'px'}
  //                 sizeraw={size}
  //                 squared={squared}
  //             />
  //         )}
  //     </Wrapper>
  // )
}
