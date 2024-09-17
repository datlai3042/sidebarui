import { HiOutlineBell } from 'react-icons/hi'

const ButtonNotification = () => {
      return (
            <button
                  title={'Thông báo'}
                  className={`btn__menuApp relative`}
                  // onClick={() => {
                  //       if (Model) {
                  //             setShowModel((prev) => !prev)
                  //       }
                  // }}
            >
                  <HiOutlineBell size={20} /> 
                  {/* {icon} */}
                  {/* {Model && showModel && (
                        <Model setShowModel={setShowModel} />
                        // <ModelContainer setShowModel={setShowModel} children={<p>1</p>} />
                  )} */}
            </button>
      )
}

export default ButtonNotification
