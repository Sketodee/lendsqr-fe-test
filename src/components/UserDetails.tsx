import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import '../UserDetails.scss';

interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[]; // Array of strings
  loanRepayment: string;
}

interface UserDetails {
  createdAt: string; // ISO date string
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string; // ISO date string
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
  id: string;
}


const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [user, setUser] = useState<UserDetails | null>(); // Manage user data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
        if (!response.ok) {
          throw new Error('Error fetching user details');
        }
        const data = await response.json();
        setUser(data); // Populate user data
        setLoading(false);
      } catch (err: any) {
        setError(err?.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  // In a real application, you would fetch the user details based on the id
  // const user: UserDetails = {
  //   fullName: "Grace Effiom",
  //   accountBalance: "₦200,000.00",
  //   accountNumber: "9912345678",
  //   tier: 2,
  //   bvn: "123456789",
  //   phoneNumber: "07060780922",
  //   email: "grace@gmail.com",
  //   gender: "Female",
  //   maritalStatus: "Single",
  //   children: "None",
  //   typeOfResidence: "Parent's Apartment",
  //   education: "B.Sc",
  //   employmentStatus: "Employed",
  //   sectorOfEmployment: "FinTech",
  //   employmentDuration: "2 years",
  //   officeEmail: "grace@lendsqr.com",
  //   monthlyIncome: "₦200,000.00 - ₦400,000.00",
  //   loanRepayment: "40,000",
  //   twitter: "@grace_effiom",
  //   facebook: "Grace Effiom",
  //   instagram: "@grace_effiom",
  //   guarantor: {
  //     fullName: "Debby Ogana",
  //     phoneNumber: "07060780922",
  //     email: "debby@gmail.com",
  //     relationship: "Sister",
  //   },
  // };

  return (
    <div>
      {user &&

        <div className="user-details">
          <Link to="/dashboard" className="back-link">← Back to Users</Link>
          <h1>User Details </h1>

          <div className="user-header">
            <div className="user-subheader">
              <div className="user-avatar">
                {user.profile.firstName.charAt(0)}
                {/* <img src={user.profile.avatar} alt="" /> */}
              </div>
              <div className="user-name-info">
                <h2>{user.profile.firstName} {user.profile.lastName}</h2>
                <p>{user.accountNumber}</p>
              </div>
              <div className="user-tier">
                <p>User's Tier</p>
                {/* <div className="stars">
                 {'★'.repeat(user.tier)}{'☆'.repeat(3 - user.tier)}
               </div> */}
              </div>
              <div className="user-balance">
                <h3> <span style={{ textDecoration: "line-through" }}>N</span> {user.accountBalance}</h3>
                <p>{user.profile.bvn}/Providus Bank</p>
              </div>
            </div>


            <div className="tabs">
              <button className="active">General Details</button>
              <button>Documents</button>
              <button>Bank Details</button>
              <button>Loans</button>
              <button>Savings</button>
              <button>App and System</button>
            </div>

          </div>



          <div className="details-section">
            <h3>Personal Information</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>Full Name</label>
                <p>{user.profile.firstName} {user.profile.lastName}</p>
              </div>
              <div className="detail-item">
                <label>Phone Number</label>
                <p>{user.phoneNumber}</p>
              </div>
              <div className="detail-item">
                <label>Email Address</label>
                <p>{user.email}</p>
              </div>
              <div className="detail-item">
                <label>BVN</label>
                <p>{user.profile.bvn}</p>
              </div>
              <div className="detail-item">
                <label>Gender</label>
                <p>{user.profile.gender}</p>
              </div>
              <div className="detail-item">
                <label>Marital Status</label>
                {/* <p>{user.maritalStatus}</p> */}
                <p>Single</p>
              </div>
              <div className="detail-item">
                <label>Children</label>
                {/* <p>{user.children}</p> */}
                <p>2</p>
              </div>
              <div className="detail-item">
                <label>Type of Residence</label>
                {/* <p>{user.typeOfResidence}</p> */}
                <p>Parent's Apartment</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Education and Employment</h3>
            <div className="education-grid">
              <div className="education-item">
                <label>Level of Education</label>
                <p>{user.education.level}</p>
              </div>
              <div className="education-item">
                <label>Employment Status</label>
                <p>{user.education.employmentStatus}</p>
              </div>
              <div className="education-item">
                <label>Sector of Employment</label>
                <p>{user.education.sector}</p>
              </div>
              <div className="education-item">
                <label>Duration of Employment</label>
                <p>{user.education.duration}</p>
              </div>
              <div className="education-item">
                <label>Office Email</label>
                <p>{user.education.officeEmail}</p>
              </div>
              <div className="education-item">
                <label>Monthly Income</label>
                <p><span style={{ textDecoration: "line-through" }}>N</span> {user.education.monthlyIncome[0]} - <span style={{ textDecoration: "line-through" }}>N</span> {user.education.monthlyIncome[user.education.monthlyIncome.length - 1]}</p>
              </div>
              <div className="education-item">
                <label>Loan Repayment</label>
                <p>{user.education.loanRepayment}</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Socials</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>Twitter</label>
                <p>{user.socials.twitter}</p>
              </div>
              <div className="detail-item">
                <label>Facebook</label>
                <p>{user.socials.facebook}</p>
              </div>
              <div className="detail-item">
                <label>Instagram</label>
                <p>{user.socials.instagram}</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Guarantor</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>Full Name</label>
                <p>{user.guarantor.firstName} {user.guarantor.lastName}</p>
              </div>
              <div className="detail-item">
                <label>Phone Number</label>
                <p>{user.guarantor.phoneNumber}</p>
              </div>
              <div className="detail-item">
                <label>Email Address</label>
                {/* <p>{user.guarantor.email}</p> */}
                <p>test@email.com</p>
              </div>
              <div className="detail-item">
                <label>Relationship</label>
                {/* <p>{user.guarantor.relationship}</p> */}
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>

  );
};

export default UserDetails;