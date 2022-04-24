import { FaFacebook, FaGoogle } from 'react-icons/fa'

import Card from '@/components/Card/Card'
import Layout from '@/components/Layout/Layout'

export default function IndexPage() {
  return (
    <Layout>
      <Card>
        <div className="flex mt-5 space-y-10 flex-col items-center h-40">
          <h1 className="font-bold text-xl ">Увійти</h1>
          <div className="flex flex-row space-x-5">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaFacebook className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Увійти з Facebook
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaGoogle className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              Увійти з Google
            </button>
          </div>
        </div>
      </Card>
    </Layout>
  )
}
