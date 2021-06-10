import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: Room
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }

  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addSession(session: SessionInput): Session
  }

  input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
  }

  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "Please forget about me")
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }

  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }

  enum Room {
    EUROPA
    SOL
    SATURN
  }
`;

export default typeDefs;
