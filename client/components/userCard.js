import Link from 'next/link'

export default function UserCard(props) {
  const { fname, lname, status, dept, img_url } = props;
  const fullname = `/emp/${fname} ${lname}`;
  return (
    <Link href={fullname}>
      <div className="w-64 flex border-2 border-[#a6b1e1] rounded-xl cursor-pointer font-roboto">
        <div>
          <img
            className="h-[10vh] w-[10vh] m-[2vh] rounded-[50%] border-2 border-[#dcd6f7]"
            src={img_url} />
        </div>

        <div className="flex flex-col justify-center">
          <div>{fname} {lname}</div>
          <div className="flex justify-center align-middle">
            <div className="m-1">{dept}</div>
            <div className="m-1 py-0.5 bg-[#eed180] font-rajdhani">{status.toUpperCase()}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}