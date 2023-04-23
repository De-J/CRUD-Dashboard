import Image from 'next/image'
import { Inter } from 'next/font/google'

import UserCard from "../../components/userCard"
import newRequest from '../../utils/newRequest';
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/router';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  // console.log(router);
  const empQuery = useQuery({
    queryKey: ["employeeRecords"],
    queryFn: () => newRequest.get("/get").then((res) => res.data)
  })

  if (empQuery.isLoading)
    return <h1>loading...</h1>

  if (empQuery.isError)
    return <pre>{JSON.stringify(empQuery.error)}</pre>

  return (
    <div className="border-red-400 border-2 flex flex-wrap gap-1 ml-16 p-6 justify-center">
      {empQuery.data.map(record => (<UserCard {...record} />))}
    </div>
  ) 
}
