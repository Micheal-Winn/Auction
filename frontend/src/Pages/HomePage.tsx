import { Box, Container,useMediaQuery,useTheme} from "@mui/material";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/product/Product";
import SidebarLists from "../components/SidebarLists";
import MobileLists from "../components/SideLists/MobileLists";

const HomePage = () => {
	const theme = useTheme()
	const is4kScreen = useMediaQuery(theme.breakpoints.up('xl'))
	const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		<>
			<Navbar />
			<Container maxWidth= {is4kScreen ? 'xl' : 'lg'} >
				<Box display={'flex'} flexDirection={isDesktop ? "row" : "column"}  sx={{ gap: "1%", paddingTop: "2%" }}>
					{isDesktop ? (<SidebarLists margin={0}/>) : (<MobileLists/>)}
					<Product />
				</Box>
			</Container>
			<Footer/>
		</>
	);
};

export default HomePage;
