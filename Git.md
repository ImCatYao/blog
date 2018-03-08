<h3>Clone a repo with a new  name in local</h3>
<p><code>git clone https://github.com/account/repo_name.git newname</code></p>
<br>
<h3>git tag</h3>
<ol>
  <li>list tags: <code>git tag</code></li>
  <li>find a tag: <code>git tag -l 'tagname'</code></li>
  <li>create a kightweight tag: <code>git tag -a 'tagname' -m 'stored message for a tag'</code></li>
  <li>how to checkout code to a specified tag</li>
  <li>By default, the <i>git push</i> command does not transfer tags to remote. <br>
  Push a specified tag to remote: <code>git push server tagname</code><br>
  or push all the tags to remote
  <code>git push --tags</code></li>
  <li>clone a repo and its tags from remote: <code>git fetch && git fetch --tags</code></li>
  <li>View code for a specified tag <code>git checkout tagname</code></li>
</ol>
<small>references:</small>
<ol>
  <li><small><a href="https://coderwall.com/p/k2fisg/git-clone-a-repository-and-checkout-a--tag">Git clone a repository and checkout a specified tag</a></small></li>
  <li><small><a href="https://git-scm.com/book/en/v2/Git-Basics-Tagging">https://git-scm.com/book/en/v2/Git-Basics-Tagging</a></small></li>
</ol>