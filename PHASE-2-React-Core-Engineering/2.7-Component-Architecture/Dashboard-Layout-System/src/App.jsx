import DashboardLayout from './Layout/DashboardLayout'
import Button from './Atoms/Button'
import Card from './Atoms/Card'
import StatWidget from './Atoms/StatWidget'
import './App.css'

function App() {


  return (
    <>
      <DashboardLayout>
        <h1>Dashboard Layout h1</h1>
        <h2>Dashborad Layout h2</h2>
        <div className="card-container">
          <Card type='success'>Success Card</Card>
          <Card type='info'>Information Card</Card>
          <Card type='warning'>Warning Card</Card>
        </div>
        <div className="statwidget-container">
        <StatWidget title='Total Sales1:' value='1000000$'/>
        <StatWidget title='Total Sales2:' value='2000000$'/>
        <StatWidget title='Total Sales3:' value='3000000$'/>
        </div>
        <Button variant='primary' >primary Btn</Button>
        <Button variant='secondary' >secondary Btn</Button>
        <Button variant='danger' >danger Btn</Button>
      </DashboardLayout>
    </>
  )
}

export default App
