const data = [
	{
		id: 1,
		image:
			'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Analytics Mentor',
		category: 'Marketing',
		description: 'How to apply vanilla extract themes to Next.js apps',
		url: '',
	},
	{
		id: 2,
		image: 'https://images.unsplash.com/photo-1633292587737-f898a032e562?auto=format&fit=crop&q=80&w=1259&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'GesPhotoss',
		category: 'CommunityManager',
		description: 'Quick tip for styling Radix Primitives with plain CSS, CSS Modules, Vanilla Extract and more',
		url: '',
	},
	{
		id: 3,
		image: 'https://images.unsplash.com/photo-1637844528447-aee837ccfc7f?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Nike',
		category: 'CommunityManager',
		description: 'Create a rating component with svg stars that support fractional values.',
		url: '',
	},
	{
		id: 4,
		image: 'https://images.unsplash.com/photo-1548364538-60b952c308b9?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'StartBucks',
		category: 'Marketing',
		description: 'How to write responsive variants with media queries in javascript',
		url: '',
	},
	{
		id: 5,
		image: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?auto=format&fit=crop&q=80&w=1286&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Baba',
		category: 'Otros',
		description: 'How to use Notion as a CMS using their public API and Next.js',
		url: '',
	},
	{
		id: 6,
		image:
			'https://images.unsplash.com/photo-1589782431327-ac8a63d965a2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Coco Chanel',
		category: 'DesarrolloWeb',
		description: 'Lorem ipsum dolor sit amet consectetur. Facilisi consequat parturient auctor lorem. Ornare id fermentum laoreet congue justo sed enim.',
		url: 'https://www.chanel.com/lx/?gad_source=1&gclid=Cj0KCQjwhfipBhCqARIsAH9msblCVqJHDWr8SHsdwJN84tXwp4yWwm51DCGKC4sJXd5PcX76cC9izfEaAkV5EALw_wcB',
	},
];
// Estan seras las categorias para filtrar los elementos(proyectos)
const categories = ['Todas','Marketing', 'DesarrolloWeb', 'CommunityManager', 'Otros'];

export { data , categories };
