// import { User } from "./components/UserTable"; // Assuming you've exported the User interface

const users = [
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive"
  },
  {
    organization: "Irorun",
    username: "Debby Ogana",
    email: "debby2@irorun.com",
    phoneNumber: "08160780928",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Pending"
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted"
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "07003309226",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Pending"
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted"
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Inactive"
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Inactive"
  },
  {
    organization: "Lendsqr",
    username: "Babatunde Fashola",
    email: "babatunde@lendsqr.com",
    phoneNumber: "08160293749",
    dateJoined: "Mar 21, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Irorun",
    username: "Chidi Okeke",
    email: "chidi@irorun.com",
    phoneNumber: "08130987654",
    dateJoined: "Jun 15, 2020 10:00 AM",
    status: "Pending"
  },
  {
    organization: "Lendstar",
    username: "Adebayo Johnson",
    email: "adebayo@lendstar.com",
    phoneNumber: "07089876543",
    dateJoined: "May 5, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Lendsqr",
    username: "Aisha Mohammed",
    email: "aisha@lendsqr.com",
    phoneNumber: "09087654321",
    dateJoined: "Apr 2, 2020 10:00 AM",
    status: "Blacklisted"
  },
  {
    organization: "Irorun",
    username: "Oluwaseun Adebayo",
    email: "oluwaseun@irorun.com",
    phoneNumber: "08076543210",
    dateJoined: "Jul 1, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Lendstar",
    username: "Chioma Eze",
    email: "chioma@lendstar.com",
    phoneNumber: "07098765432",
    dateJoined: "Mar 18, 2020 10:00 AM",
    status: "Inactive"
  },


  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive"
  },
  {
    organization: "Irorun",
    username: "Debby Ogana",
    email: "debby2@irorun.com",
    phoneNumber: "08160780928",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Pending"
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted"
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "07003309226",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Pending"
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted"
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Inactive"
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Inactive"
  },
  {
    organization: "Lendsqr",
    username: "Babatunde Fashola",
    email: "babatunde@lendsqr.com",
    phoneNumber: "08160293749",
    dateJoined: "Mar 21, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Irorun",
    username: "Chidi Okeke",
    email: "chidi@irorun.com",
    phoneNumber: "08130987654",
    dateJoined: "Jun 15, 2020 10:00 AM",
    status: "Pending"
  },
  {
    organization: "Lendstar",
    username: "Adebayo Johnson",
    email: "adebayo@lendstar.com",
    phoneNumber: "07089876543",
    dateJoined: "May 5, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Lendsqr",
    username: "Aisha Mohammed",
    email: "aisha@lendsqr.com",
    phoneNumber: "09087654321",
    dateJoined: "Apr 2, 2020 10:00 AM",
    status: "Blacklisted"
  },
  {
    organization: "Irorun",
    username: "Oluwaseun Adebayo",
    email: "oluwaseun@irorun.com",
    phoneNumber: "08076543210",
    dateJoined: "Jul 1, 2020 10:00 AM",
    status: "Active"
  },
  {
    organization: "Lendstar",
    username: "Chioma Eze",
    email: "chioma@lendstar.com",
    phoneNumber: "07098765432",
    dateJoined: "Mar 18, 2020 10:00 AM",
    status: "Inactive"
  }
];

export default users;