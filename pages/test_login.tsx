import { NextPage } from "next"

const testLogin: NextPage = () => {
  return (
    <div>
      <form action="/" method="post">
        <div>
          <label htmlFor="username">Username</label>
          <div className="border-2 border-orange-500">
            <input type="text" id="username" name="username" />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="border-2 border-orange-500">
            <input type="password" id="password" name="password" />
          </div>
        </div>
        <div className="border-2 border-orange-500 gap-4">
          <button type="submit">Login</button>
        </div>
        
      </form>
    </div>
  )
}

export default testLogin