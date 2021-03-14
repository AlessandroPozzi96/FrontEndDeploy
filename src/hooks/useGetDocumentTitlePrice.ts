import { useEffect } from 'react'
import { usePriceCakeBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cakePriceUsd = usePriceCakeBusd()
  useEffect(() => {
    // document.title = `Armadillo - $${Number(cakePriceUsd).toLocaleString(undefined, {
    document.title = `Armadillo`
  })
}
export default useGetDocumentTitlePrice
