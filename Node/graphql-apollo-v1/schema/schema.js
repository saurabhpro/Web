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
    sessionById(id: ID): SessionOrError
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

  union SessionOrError = Session | Error

  type Error {
    code: String
    message: String
    token: String
  }
  enum Room {
    EUROPA
    SOL
    SATURN
  }
`;

export default typeDefs;
