import style from '../style.module.css';
import other from '../other.module.css';
import outside from '@/style/outside.module.css';

const page = () => {
  return (
    <div>
        <h1 className={style.main}>CSS from style module css file</h1>
        <h2 className={other.main}>css from other module css file</h2>
        <h3 className={outside.main}>css from outide module css file from src</h3>
    </div>
  )
}

export default page