import Data from './Data'
import Card from './Card'

export default function Cont() {

  const cardComp = Data.map(item => (
    <Card 
      key={item.id}
      {...item}
    />
  ))

  return (
    <div className='div'>
      {cardComp}
    </div>
)
}