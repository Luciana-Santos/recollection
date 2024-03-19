import Card from '@/components/Card/Card'
import Title from '@/components/Title'
import { mockDataContent } from '@/data/content'

const Latest = () => {
  return (
    <div className="page-layout">
      <Title>Latest</Title>

      <main className="main-content">
        {mockDataContent.map((card) => {
          return <Card key={card.id} data={card} />
        })}
      </main>
    </div>
  )
}

export default Latest
