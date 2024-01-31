import {connect} from 'react-redux';
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/actions";

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
// export default Home; 
export default connect(mapStateToProps,mapDispatchToProps)(Home)