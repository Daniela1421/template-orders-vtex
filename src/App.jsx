import Header from './components/Header'; 
import Footer from './components/Footer';
import OrderList from './components/OrderList'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl flex-grow container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Mis Órdenes
        </h1>
        <OrderList />
      </main>
      <Footer />
    </div>
  )
}

export default App
