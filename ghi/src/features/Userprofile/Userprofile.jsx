import {
	useGetRecommendationListQuery,
	useDeleteRecommendationDetailsMutation,
	useGetTokenQuery,
} from '../../app/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './Userprofile.css';
import pfp from './images/pfp.png';

function Userprofile() {
  const navigate = useNavigate();
  const { data } = useGetRecommendationListQuery();
  const { data: account, isLoading } = useGetTokenQuery();
  const [deleteRec] = useDeleteRecommendationDetailsMutation();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (!isLoading && !account) {
      navigate('/');
    }
  }, [account, isLoading, navigate]);

  const groupedRecommendations = {};

  if (data) {
    data.forEach((item) => {
      if (!groupedRecommendations[item.location]) {
        groupedRecommendations[item.location] = [];
      }
      groupedRecommendations[item.location].push(item);
    });
  }

  const handleTabClick = (location) => {
    setActiveTab(location);
  };

  return (
    <div className="rec-background">
      <div id="title-header">
        <div className="overlay">
          <img id="profile-pfp" src={pfp} />
          <h4>
            {account &&
              account.full_name &&
              account.full_name.toUpperCase()[0] +
                account.full_name.substring(1)}
            's Recommendations
          </h4>
        </div>
      </div>
      <div className="rec-container">
        <ul className="tabs">
          {Object.keys(groupedRecommendations).map((location, index) => (
            <li key={location} className="tab">
              <button
                onClick={() => handleTabClick(location)}
                className={`large-tab-button ${location === activeTab ? 'active' : ''}`}
              >
                {location}
              </button>
            </li>
          ))}
        </ul>

        {activeTab && groupedRecommendations[activeTab] ? (
          <div className="recommendations">
            {groupedRecommendations[activeTab].map((item) => {
              const handleDelete = () => {
                deleteRec({ id: item.id });
              };

              return (
                <div key={item.id} className="col s12 m7">
                  <div id="profile-rec-card" className="card">
                    <img src={item.image} id="pfp" />
                    <div id="my-card-content">
                      <span id="user-profile-card-title" className="card-title">
                        {item.location}
                      </span>
                      <p className="interests-user-profile">
                        {item.interest.charAt(0).toUpperCase() +
                          item.interest.slice(1).toLowerCase()}
                      </p>
                    </div>
                    <div id="button-space">
                      <button
                        id="details-btn"
                        onClick={() => {
                          navigate(`/recdetails/${item.id}`);
                        }}
                        className="btn waves-effect waves-light"
                        type="button"
                      >
                        Details
                      </button>
                      <button
                        onClick={handleDelete}
                        className="btn waves-effect red lighten-1"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className='tabs_paragraph'>Select a location to view recommendations.</p>
        )}
      </div>
    </div>
  );
}

export default Userprofile;
