import { DNA } from 'react-loader-spinner'
import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <DNA
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}

export default Loader