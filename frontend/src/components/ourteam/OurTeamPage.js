import React, { useEffect, useState } from "react";
import Modal from "../modal";
import bullet_icon from "../assets/bullet_icon.png"

function OurTeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch team members data
    fetch("/assets/ourteam.json")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="py-20 px-6 min-h-screen text-white bg-gradient-to-br from-black via-black to-[#2a0530]">
      <h1 className="text-8xl text-white text-center mb-10">Our Team</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="px-6 py-4 bg-gradient-to-br from-black via-black to-[#2a0530] rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            {/* Profile Image */}
          <div className="w-full flex items-start justify-start mb-4">
            <img
              src={member.profileUrl}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

            {/* Profile Details */}
            <div className="pb-6">
  <h2 className="text-2xl font-semibold mb-2 text-start">{member.name}</h2>
  <p className="text-gray-300 text-xl mb-4 text-start">{member.post}</p>
  <button
    onClick={() => openModal(member)}
    className="w-full text-white font-medium py-2 px-4 rounded-md bg-purple transition-all duration-500 shadow-[2px_2px_0px_hsl(0,0%,90%),4px_4px_0px_hsl(0,0%,80%),6px_6px_0px_hsl(0,0%,70%),8px_8px_0px_hsl(0,0%,60%),10px_10px_0px_hsl(0,0%,50%),12px_12px_0px_hsl(0,0%,40%),14px_14px_0px_hsl(0,0%,30%),16px_16px_0px_hsl(0,0%,20%),18px_18px_0px_hsl(0,0%,10%)] hover:bg-[#341339] hover:text-white hover:shadow-none"
  >
    View Full Profile
  </button>
</div>
          </div>
        ))}
      </div>

      {/* Modal for Full Profile */}
      {isModalOpen && selectedMember && (
        <Modal.ModalTeamContainer onClose={closeModal}>
          {/* Profile Image */}
          <div className="flex flex-col items-start mb-6">
            <img
              src={selectedMember.profileUrl}
              alt={selectedMember.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-purple-600 shadow-lg"
            />
            <h2 className="text-3xl font-bold mt-4">{selectedMember.name}</h2>
            <p className="text-xl text-gray-300">{selectedMember.post}</p>
          </div>

          {/* Description */}
          <div className="pt-10">
            <ul className="list-disc space-y-3 pl-6 text-gray-400">
              {selectedMember.description.map((point, index) => (
                <li
                key={index}
                className="text-lg flex items-start gap-3 text-gray-400"
              >
                <img
                  src={bullet_icon}
                  alt="Bullet Icon"
                  className="w-6 h-6 object-contain mt-1"
                />
                {point}
              </li>
              ))}
            </ul>
          </div>
        </Modal.ModalTeamContainer>
      )}
    </div>
  );
}

export default OurTeamPage;
