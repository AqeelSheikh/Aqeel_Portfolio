import * as icon  from 'react-icons/si'

const profile = {
	name: 'Aqeel Sheikh Sabir',
	role: 'Front End Developer',
	description: '	I am a Computer Science graduate with a penchant	for design and storytelling. I am passionate aboutenhancing user experience and maximizing user	interface',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com' },
	{ icon: icon.SiLinkedin, link: 'www.linkedin.com/in/muhammad-aqeel-sabir-15600727a' },
	{ icon: icon.SiFacebook, link: 'https://www.facebook.com/profile.php?id=100082986617483' },
	{ icon: icon.SiInstagram, link: 'https://www.instagram.com/aqeelsheikhsabir/' },
];

const brand = 'SheikhTech'


const work = [
	{
		name: 'Navtour',
		description: 'Navtour is a tourism site which offers great oppurunity for explorers and it has been developed in frontend with sass framework',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiSass, name: 'SASS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://AqeelSheikh.github.io/Navtour',
		linkGithub: 'https://github.com/AqeelSheikh/Navtour',
	},
	{
		name: 'DevConnector',
		description: 'Dev Connector is a wonderful dev community app and it has been developed in MERN Stack and fully functional Backend as well.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://aqeelsheikh.github.io/MERN_DevConnector/',
		linkGithub: 'https://github.com/AqeelSheikh/DevConnector_MERN',
	},
	{
		name: 'TechVentory',
		description: 'Its a WebApp which is being developed for an Oman based Client used  to control its inventory management and all its relevant operations.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://github.com/AqeelSheikh/js-practice',
		linkGithub: 'https://github.com/AqeelSheikh/js-practice',
	},
	{
		name: 'CustomWare',
		description: 'Its a 3D open Ai MERN Stack App where customer can design thhier own T shirts.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
			{ icon: icon.SiWeb3Dotjs, name: 'Threejs' },
		],
		linkProject: 'https://github.com/AqeelSheikh/CustomWare_MERN_Live_Customization',
		linkGithub: 'https://github.com/AqeelSheikh/CustomWare_MERN_Live_Customization',
	},
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiSass, name: 'SASS' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap', },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiExpress, name: 'Express' },
			{ icon: icon.SiMongodb, name: 'MongoDB', },
			{ icon: icon.SiRedux, name: 'Redux', },
			{ icon: icon.SiHeroku, name: 'Heroku', },
		],
	},
]

const contact = {
	description: '	Feel free to get in touch with me via email at [Your Email Address] for project inquiries, collaborations, or just to say hello. You can also connect with me on LinkedIn ([Your LinkedIn Profile]) to stay updated on my professional journey. I am always eager to explore new opportunities and engage with the tech community. Looking forward to hearing from you!',
	email: 'aqeelsheikhsabir916.com'
}

export { profile, social, work, stack, contact, brand }