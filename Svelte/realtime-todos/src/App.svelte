<script>
  import Profile from './Profile.svelte';
  import Todos from './Todos.svelte';

  import { auth, googleProvider } from './firebase';
  import { signInWithPopup } from 'firebase/auth';
  import { authState } from 'rxfire/auth';

  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  function login() {
    signInWithPopup(auth, googleProvider);
  }
</script>

<section>
  {#if user}
    {(console.log(user), '')}
    <Profile {...user} />
    <button on:click={() => auth.signOut()}>Logout</button>
    <hr />
    <Todos uid={user.uid} />
  {:else}
    <button on:click={login}> Signin with Google </button>
  {/if}
</section>
