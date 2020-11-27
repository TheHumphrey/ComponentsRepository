import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { ProgressBar, Card, Row, Col } from 'react-bootstrap';

import ChartProgressStyle from './style';
import { RootState } from '../../../store/reducers/rootReducer';

const ChartProgress = (): ReactElement => {
  const isLoading = useSelector((state: RootState) => state.loading);
  return (
    <ChartProgressStyle>
      <Card style={{ width: '100%', height: '9rem' }}>
        <Card.Body>
          <Card.Title>Total de Entregas</Card.Title>
          {isLoading ? (
            <ProgressBar label="loading..." className="success" now={100} />
          ) : (
            <ProgressBar className="progressChart">
              <ProgressBar label="40" className="success" now={40} key={1} />
              <ProgressBar label="20" className="warning" now={20} key={3} />
              <ProgressBar label="20" className="danger" now={20} key={2} />
              <ProgressBar label="10" className="info" now={10} key={4} />
              <ProgressBar label="10" className="pending" now={10} key={5} />
            </ProgressBar>
          )}

          <Card.Text>
            <Row xs={5} md={5} lg={5}>
              <Col>
                <span className="dot success-color"></span>
                <span>Entregue</span>
              </Col>
              <Col>
                <span className="dot warning-color"></span>
                <span>Parcial</span>
              </Col>
              <Col>
                <span className="dot danger-color"></span>
                <span>Não Entregue</span>
              </Col>
              <Col>
                <span className="dot info-color"></span>
                <span>Re-Entrega</span>
              </Col>
              <Col>
                <span className="dot pending-color"></span>
                <span>Pendentes</span>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </ChartProgressStyle>
  );
};

export default ChartProgress;
