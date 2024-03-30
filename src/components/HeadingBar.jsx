import React from 'react'
import { Link } from 'react-router-dom'

export default function HeadingBar({title}) {
  return (
    <section className="">
        <div className="conatainer-xl">
          <div className="row">
            <div className="col-12">
              <div className="title-container bg-white p-2 pt-4">
                <p className="text-center" style={{ fontSize: "14px" }}>
                  <Link to="/" className='text-dark'>Home&nbsp;</Link>/&nbsp;{title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
