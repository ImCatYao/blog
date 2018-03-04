<h4>how to install <i>nvm</i> on mac os</h4>
<ol>
  <li>
    download nvm:
    <code>curl https://raw.github.com/creationix/nvm/master/install.sh | sh</code>
  </li>
  <li>
    install nvm:
    <code>source ~/.nvm/nvm.sh</code>
  </li>
</ol>
<small>reference: <a href="https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found">https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found</a></small>
<br>
<h4>how to update node version with nvm</h4>
<p>
  <small>script:</small> <code>nvm install NEW_VERSION --reinstall-packages-from=OLD_VERSION</code>
</p>
<p>
  for exmple:
  <code>nvm install 6.7 --reinstall-packages-from=6.4</code>
</p>
<p>
  if u want to delete u previous verison of node, try with:
  <code>nvm uninstall OLD_VERSION</code>
</p>

<small>reference: <a href="https://stackoverflow.com/questions/34810526/how-to-update-node-with-nvm">https://stackoverflow.com/questions/34810526/how-to-update-node-with-nvm</a></small>