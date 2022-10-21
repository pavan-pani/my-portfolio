import React from 'react'

const aboutme = () => {
  return (
    <div id='About Me'>
      <div className='min-h-screen bg-white'>
        <div className='flex flex-row'>
          <div>
            <table className='table-auto'>
            {/* <thead className='col-span-2 text-center'>Persoanl Info</thead> */}
              <tr>
                <td><img srcset="https://img.icons8.com/office/344/user.png 2x" alt="icon" className='w-10'/></td>
                <td className='text-start'>Goudara Pavan Kumar</td>
              </tr>
              <tr>
                <td><img srcset="https://img.icons8.com/nolan/344/marker.png 2x" className='w-10'/></td>
                <td className=' w-[300px] text-sm'>110, Thumbiganuru(v), Kanekal(T), anathpuram(D), AP 515871</td>
              </tr>
              <tr>
                <td><img srcset="https://img.icons8.com/nolan/344/apple-phone.png 2x" alt="icon"  className='w-10'/></td>
                <td className=''>+91 7406036963</td>
              </tr>
              <tr className=''>
                <td> <a href='https://github.com/pavan-pani'> <img srcset="https://img.icons8.com/nolan/344/git.png 2x" alt="icon" className='w-10' /></a></td>
                <td className=' w-10'><a href='https://www.linkedin.com/in/g-pavan-kumar-2957181b5/'><img srcset="https://img.icons8.com/nolan/344/linkedin-circled.png 2x" alt="icon" className='w-10'/></a></td>
                <td><a href='https://instagram.com/__pavan.pani__?igshid=YmMyMTA2M2Y='><img srcset="https://img.icons8.com/nolan/344/instagram-new.png 2x" alt="icon" className='w-10'/></a></td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default aboutme