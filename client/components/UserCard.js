import Link from 'next/link'

export default function UserCard(props) {
  const { fname, lname, status, dept } = props;

  return (
    <Link href="">
      <div className="w-64 flex border-2 border-[#a6b1e1] rounded-xl cursor-pointer font-roboto">
        <div>
          <img
            className="h-[10vh] w-[10vh] m-[2vh] rounded-[50%] border-2 border-[#dcd6f7]"
            src="https://plus.unsplash.com/premium_photo-1676654935493-10ee2b4f2a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>

        <div className="flex flex-col justify-center">
          <div>{fname} {lname}</div>
          <div className="flex justify-center align-middle">
            <div className="m-1">{dept}</div>
            <div className="m-1 py-0.5 bg-[#eed180] font-rajdhani">{status}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}