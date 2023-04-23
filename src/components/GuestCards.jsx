import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import GuestsFancyCards from './GuestsFancyCards';

const GuestCards = ({
    userId2,
    token,
    rerender,
    handleRerender,
    selectedIcon,
    }) => {
    const [showGuestCards, setShowGuestCards] = useState([]);

    useEffect(() => {
        const fetchLinks2 = async () => {
          try {
            const response = await axios.get(
              `https://www.s3.syntradeveloper.be/backend/api/users/${userId2}`
            );
            setShowGuestCards(response.data.url);
          } catch (error) {
            console.error(error);
          }
        };
        console.log(userId2);
        fetchLinks2();
      }, [userId2, rerender]); // add rerender to the dependency array of useEffect
    

  return (
    <div>
        <Container>
            <Row
                xs={1}
                md={2}
                lg={3}
                xl={3}
                xxl={4}
                gap={1}
                className="d-flex justify-content-center"
            >
                {showGuestCards.map((link, index) => {
                return (
                    <Col key={index} className="mb-3">
                    <GuestsFancyCards
                        id="card-container"
                        link={link}
                        index={index}
                        userId2={userId2}
                        linkId={link.id}
                        name={link.name}
                        description={link.description}
                        url={link.link}
                        token={token}
                        handleRerender={handleRerender}
                        selectedIcon={selectedIcon}
                        theme={link.theme}
                        icon={link.icon}
                    />
                    </Col>
                );
                })}
            </Row>      
        </Container>
    </div>
  )
}

export default GuestCards