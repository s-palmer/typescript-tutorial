import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface Base {
  id: string;
}

interface User extends Base {
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  title: string;
  body: string;
}

interface Comment extends Base {
  comment: string;
}

interface Feed extends Base, User {
  posts: Array<object>
}

const feed: Feed = {
  id: "feed id",
  firstName: "John",
  lastName: "Wick",
  posts: [
    {}
  ]
}

// note interfaces can extend from other interfaces, types cannot

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
