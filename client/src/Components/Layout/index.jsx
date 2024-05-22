import PropTypes from 'prop-types'

const Layout = ({ children })=>{
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      }

    return(
        //lg:mt-10
        <div className='flex flex-col items-center h-1/2 py-4 mt-0 
          lg:mt-16'>
            { children }
        </div>
    )
}

export default Layout
