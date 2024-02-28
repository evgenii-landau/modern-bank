import styles from './style.js';
import {
	NavBar,
	Billings,
	Button,
	Business,
	CardDeal,
	Clients,
	CTA,
	FeedBackCard,
	Footer,
	GetStarted,
	Hero,
	Stats,
	Testimonials
} from "./components";

function App() {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}></div>
			<div className={`${styles.boxWidth}`}>
				<NavBar/>
			</div>

			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero/>
				</div>
			</div>

			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats/>
					<Business/>
					<Billings/>
					<CardDeal/>
					<Testimonials/>
					<Clients/>
					<CTA/>
					<Footer/>
				</div>
			</div>

		</div>
	)
}

export default App


