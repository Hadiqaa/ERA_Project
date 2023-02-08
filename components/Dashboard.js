//Volunteer Screen

import CurrentRequest from './CurrentRequest';
import GoogleMapVolunteerDashboard from './GoogleMapVolunteerDashboard';


const Dashboard = () => {
  return (
    <View >
      <GoogleMapVolunteerDashboard/>
      <CurrentRequest/>
    </View>
  );

}

export default Dashboard;