import React, { useState } from 'react';
import './style-sessions.css';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import SessionItem from './SessionItem';

const SESSIONS_ATTRIBUTES = gql`
  fragment SessionInfo on Session {
    id
    title
    startsAt
    day
    room
    level
    speakers {
      id
      name
    }
  }
`;

const CREATE_SESSION = gql`
  mutation createSession($session: SessionInput!) {
    createSession(session: $session) {
      ...SessionInfo
    }
  }
  ${SESSIONS_ATTRIBUTES}
`;

// Define the query
const SESSIONS = gql`
  query sessions($day: String!) {
    intro: sessions(day: $day, level: "Introductory and overview") {
      ...SessionInfo
    }
    intermediate: sessions(day: $day, level: "Intermediate") {
      ...SessionInfo
    }
    advanced: sessions(day: $day, level: "Advanced") {
      ...SessionInfo
    }
  }
  ${SESSIONS_ATTRIBUTES}
`;

const ALL_SESSIONS = gql`
  query sessions {
    sessions {
      ...SessionInfo
    }
  }
  ${SESSIONS_ATTRIBUTES}
`;

const sessionItem = (session) => (
  <SessionItem
    key={session.id}
    session={{
      ...session,
    }}
  />
);

function AllSessionList() {
 
  const { loading, error, data } = useQuery(ALL_SESSIONS);

  console.log(data);
  console.log(error);
  console.log(loading);
  if (loading) return <p>Loading Sessions..</p>;

  if (error) return <p>Error loading sessions!</p>;

  return data.sessions.map(sessionItem);
}

function SessionList({ day }) {
  if (day === '') day = 'Wednesday';

  // execute query and store response json
  const { loading, error, data } = useQuery(SESSIONS, {
    variables: { day },
  });

  if (loading) return <p>Loading Sessions..</p>;

  if (error) return <p>Error loading sessions!</p>;

  const results = [];

  results.push(data.intro.map(sessionItem));

  results.push(data.intermediate.map(sessionItem));

  results.push(data.advanced.map(sessionItem));

  return results;
}

export function Sessions() {
  const [day, setDay] = useState('');
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row" style={{ padding: 10 }}>
            <Link
              className="btn btn-lg center-block"
              to={`/conference/sessions/new`}
            >
              Submit a Session!
            </Link>
          </div>
          <div className="row">
            <button
              type="button"
              onClick={() => setDay('All')}
              className="btn-oval"
            >
              All Sessions
            </button>
            <button
              type="button"
              onClick={() => setDay('Wednesday')}
              className="btn-oval"
            >
              Wednesday
            </button>
            <button
              type="button"
              onClick={() => setDay('Thursday')}
              className="btn-oval"
            >
              Thursday
            </button>
            <button
              type="button"
              onClick={() => setDay('Friday')}
              className="btn-oval"
            >
              Friday
            </button>
          </div>
          <SessionList day={day} />
          {day === 'All' && <AllSessionList />}
        </div>
      </section>
    </>
  );
}

export function SessionForm() {
  const updateSessions = (cache, { data }) => {
    cache.modify({
      fields: {
        sessions(exisitingSessions = []) {
          const newSession = data.createSession;
          cache.writeQuery({
            query: ALL_SESSIONS,
            data: { newSession, ...exisitingSessions },
          });
        },
      },
    });
  };

  const [create, { called, error }] = useMutation(CREATE_SESSION, {
    update: updateSessions,
  });

  if (called) return <p>Session Submitted Successfully!</p>;

  if (error) return <p>Failed to submit session</p>;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
      }}
    >
      <Formik
        initialValues={{
          title: '',
          description: '',
          day: '',
          level: '',
        }}
        onSubmit={async (values) => {
          await create({ variables: { session: values } });
        }}
      >
        {() => (
          <Form style={{ width: '100%', maxWidth: 500 }}>
            <h3 className="h3 mb-3 font-weight-normal">Submit a Session!</h3>
            <div className="mb-3" style={{ paddingBottom: 5 }}>
              <label htmlFor="inputTitle">Title</label>
              <Field
                id="inputTitle"
                className="form-control"
                required
                autoFocus
                name="title"
              />
            </div>
            <div className="mb-3" style={{ paddingBottom: 5 }}>
              <label htmlFor="inputDescription">Description</label>
              <Field
                type="textarea"
                id="inputDescription"
                className="form-control"
                required
                name="description"
              />
            </div>
            <div className="mb-3" style={{ paddingBottom: 5 }}>
              <label htmlFor="inputDay">Day</label>
              <Field
                name="day"
                id="inputDay"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3" style={{ paddingBottom: 5 }}>
              <label htmlFor="inputLevel">Level</label>
              <Field
                name="level"
                id="inputLevel"
                className="form-control"
                required
              />
            </div>
            <div style={{ justifyContent: 'center', alignContent: 'center' }}>
              <button className="btn btn-primary">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export function AddSession() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <SessionForm />
          </div>
        </div>
      </section>
    </>
  );
}
