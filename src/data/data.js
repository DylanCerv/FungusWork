import analyticsImage from '../img/analitycs.jpg';
import cocoImage2 from '../img/coco-chanel-2.jpg';
// import defaultimg from '../img/800x1000.png';
import imagehoodie from '../img/image-hoodie.jpg';
import nikeEdificio from '../img/nike-edificio.jpg';
import startBucks from '../img/startbucks.jpg';
import baba from '../img/baba.jpg';


const data = [
	{
		id: 1,
		image: analyticsImage,
		title: 'Analytics Mentor',
		category: 'Marketing',
		description: 'How to apply vanilla extract themes to Next.js apps',
		url: '',
	},
	{
		id: 2,
		image: imagehoodie,
		title: 'GesPhotoss',
		category: 'CommunityManager',
		description: 'Quick tip for styling Radix Primitives with plain CSS, CSS Modules, Vanilla Extract and more',
		url: '',
	},
	{
		id: 3,
		image: nikeEdificio,
		title: 'Nike',
		category: 'CommunityManager',
		description: 'Create a rating component with svg stars that support fractional values.',
		url: '',
	},
	{
		id: 4,
		image: startBucks,
		title: 'StartBucks',
		category: 'Marketing',
		description: 'How to write responsive variants with media queries in javascript',
		url: '',
	},
	{
		id: 5,
		image: baba,
		title: 'Baba',
		category: 'Otros',
		description: 'How to use Notion as a CMS using their public API and Next.js',
		url: '',
	},
	{
		id: 6,
		// image: 'https://via.placeholder.com/800x1000',
		image: cocoImage2,
		title: 'Coco Chanel',
		category: 'DesarrolloWeb',
		description: 'Lorem ipsum dolor sit amet consectetur. Facilisi consequat parturient auctor lorem. Ornare id fermentum laoreet congue justo sed enim.',
		url: 'https://www.chanel.com/lx/?gad_source=1&gclid=Cj0KCQjwhfipBhCqARIsAH9msblCVqJHDWr8SHsdwJN84tXwp4yWwm51DCGKC4sJXd5PcX76cC9izfEaAkV5EALw_wcB',
	},
];
// Estan seras las categorias para filtrar los elementos(proyectos)
const categories = ['Todas','Marketing', 'DesarrolloWeb', 'CommunityManager', 'Otros'];

export { data , categories };
