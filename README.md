
<h1 align="center" >:globe_with_meridians: EveryNet</h1>

<p>EveryNet is a decentralized peer-to-peer network enabling global data sharing and communication. Leveraging mobile devices and a unique overlay network, EveryNet aims to provide a low-cost and accessible solution for data sharing and APIs.</p>

<p align="center"><i>As with all good things, this is a work in progress.</i></p>

<h2>Table of Contents</h2>

<ol>
  <li><a href="#open_book-philosophy">:open_book: Philosophy</a></li>
  <li><a href="#hourglass_flowing_sand-history">:hourglass_flowing_sand: History</a></li>
  <li><a href="#hammer_and_wrench-features">:hammer_and_wrench: Features</a></li>
  <li><a href="#gear-technology">:gear: Technology</a></li>
  <li><a href="#closed_lock_with_key-security-and-privacy">:closed_lock_with_key: Security and Privacy</a></li>
  <li><a href="#file_folder-project-structure">:file_folder: Project Structure</a></li>
  <li><a href="#checkered_flag-getting-started">:checkered_flag: Getting Started</a>
    <ol>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#configuration">Configuration</a></li>
    </ol>
  </li>
  <li><a href="#handshake-contributing">:handshake: Contributing</a></li>
  <li><a href="#book-documentation">:book: Documentation</a></li>
  <li><a href="#question-need-help">:question: Need Help?</a></li>
  <li><a href="#trophy-acknowledgements">:trophy: Acknowledgements</a></li>
  <li><a href="#balance_scale-license">:balance_scale: License</a></li>
</ol>


<h2 id="open_book-philosophy">:open_book: Philosophy</h2>

<p>EveryNet is built on the belief that access to information and communication should be universally accessible and affordable. The project embodies a commitment to empower individuals around the world by allowing them to communicate and share data, regardless of their geographical location or financial status. This drives the design and development of a technology that is scalable, efficient, and easy to use on any device.</p>

<h2 id="hourglass_flowing_sand-history">:hourglass_flowing_sand: History</h2>

<p>The EveryNet project was born out of an increasing need for a more accessible, inclusive, and equitable internet. With the rapid advancement of technology and increasing digital divide, it became clear that a solution was needed that prioritized the many over the few. EveryNet represents a commitment to a globally connected, decentralized, and fair digital future.</p>

<h2 id="hammer_and_wrench-features">:hammer_and_wrench: Features</h2>

<ul>
  <li>:iphone: <strong>Universal Accessibility:</strong> EveryNet works with any internet-enabled device, from powerful servers to basic mobile phones.</li>
  <li>:chart_with_upwards_trend: <strong>Scalability:</strong> EveryNet is designed to handle large volumes of data and scale with the number of users.</li>
  <li>:lock: <strong>Security:</strong> Data is encrypted end-to-end in EveryNet to ensure privacy and security.</li>
  <li>:balance_scale: <strong>Reputation System:</strong> Nodes in the network have a reputation score, influenced by behavior, feedback, and participation. This score helps keep the network reliable and secure.</li>
  <li>:shield: <strong>Content Hash Lists:</strong> EveryNet implements a system of content hash lists to prevent the spread of known illegal content.</li>
  <li>:exclamation: <strong>Community Moderation:</strong> EveryNet empowers users with the ability to flag inappropriate or illegal content, promoting a safe and healthy network environment.</li>
</ul>

<h2 id="gear-technology">:gear: Technology</h2>

<p>EveryNet is built using various technologies to provide an efficient, scalable, and accessible peer-to-peer network.</p>

<table>
  <tr>
    <th>Technology Components</th>
    <th>Implementation</th>
    <th>Explanation</th>
  </tr>
  <tr>
    <td><a href="https://libp2p.io/">libp2p</a></td>
    <td>At the core of EveryNet is <a href="https://libp2p.io/">libp2p</a>, a modular network stack that allows the creation of peer-to-peer applications. Libp2p's DHT module is used for peer discovery and content routing, allowing efficient data retrieval.</td>
    <td>libp2p is a flexible and extensible network stack that brings about a paradigm shift in the way the Internet is perceived and provides the building blocks for a decentralized, peer-to-peer Internet. Its Distributed Hash Table (DHT) module provides an effective mechanism for peer discovery and content routing.</td>
  </tr>
  <tr>
    <td>Mobile-First Design</td>
    <td>EveryNet is designed with mobile devices in mind. The communication protocols, data structures, and algorithms are optimized for efficiency to ensure low data usage and battery drain.</td>
    <td>By prioritizing a mobile-first design, EveryNet ensures that the most common mode of Internet access is well catered for. It also guarantees that despite the limitations inherent to mobile devices such as limited power and data, the network performs optimally.</td>
  </tr>
  <tr>
    <td><a href="https://en.wikipedia.org/wiki/Encryption">Encryption</a></td>
    <td>To ensure privacy and security, all communication in EveryNet is encrypted using industry-standard protocols.</td>
    <td>The use of encryption not only enhances the privacy of communications by making them unreadable to unauthorized entities but also ensures data integrity and the authentication of communicating parties. This is crucial in maintaining trust and security within the network.</td>
  </tr>
  <tr>
    <td>Modularity</td>
    <td>EveryNet is designed to be modular, so it can be customized to fit various use cases. Users can choose which features to enable, and developers can easily add new features.</td>
    <td>With a modular design, EveryNet can be easily customized and extended, enabling it to adapt to different usage scenarios and requirements. This design approach encourages experimentation and innovation, as developers can easily add new modules or modify existing ones.</td>
  </tr>
</table>

<h2 id="closed_lock_with_key-security-and-privacy">:closed_lock_with_key: Security and Privacy</h2>
<table>
  <tr>
    <th>Security and Privacy Components</th>
    <th>Implementation</th>
    <th>Explanation</th>
  </tr>
  <tr>
    <td><a href="https://en.wikipedia.org/wiki/Encryption">Encryption</a></td>
    <td>- <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard">AES-256</a><br>- <a href="https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman">ECDH (Elliptic Curve Diffie-Hellman)</a></td>
    <td>EveryNet uses AES-256 for symmetric encryption and ECDH for key exchange to secure communication between nodes.</td>
  </tr>
  <tr>
    <td><a href="https://en.wikipedia.org/wiki/Public_key_infrastructure">Authentication</a></td>
    <td><a href="https://en.wikipedia.org/wiki/Public_key_infrastructure">Public Key Infrastructure (PKI)</a></td>
    <td>EveryNet uses PKI to authenticate the identities of nodes, ensuring the integrity of the network and preventing impersonation or man-in-the-middle attacks.</td>
  </tr>
  <tr>
    <td>Reputation System</td>
    <td>- Behavior analysis<br>- Feedback mechanism<br>- Node participation</td>
    <td>EveryNet employs a decentralized reputation system, where nodes are rated based on their behavior, feedback from other nodes, and level of network participation. This ensures the reliability and security of the network.</td>
  </tr>
  <tr>
    <td>Content Moderation</td>
    <td>- Hashing and blacklisting of illicit content<br>- Community moderation</td>
    <td>Illicit or inappropriate content is hashed and blacklisted. The blacklists are propagated across the network to prevent the spread of such content. Additionally, EveryNet empowers its community with moderation abilities to maintain a healthy network environment.</td>
  </tr>
  <tr>
    <td>Data Retention and Deletion</td>
    <td>User-controlled with network redundancy</td>
    <td>Data is stored on the network as long as it's deemed valuable by the network's participants. Nodes have control over their data but once data is shared on the network, copies may exist elsewhere due to the network's redundancy mechanism.</td>
  </tr>
  <tr>
    <td>Resilience to Attacks</td>
    <td>- Reputation systems<br>- Validation of new nodes<br>- Network diversity measures</td>
    <td>The network uses various strategies to mitigate common P2P attacks, including reputation-based trust systems, stringent validation of new nodes, and maintaining a diverse network topology.</td>
  </tr>
  <tr>
    <td>Legal Considerations</td>
    <td>Strict adherence to local and international digital communication laws</td>
    <td>EveryNet has a strong commitment to uphold all local and international laws related to digital communication and sharing of data. In the case of receiving DMCA takedown requests or other legal inquiries, they are addressed promptly and in accordance with legal obligations.</td>
  </tr>
</table>

<h2 id="file_folder-project-structure">:file_folder: Project Structure</h2>

<pre>
.
├── DesktopApp
│   └── everynet_desktop
│       ├── README.md
│       ├── analysis_options.yaml
│       ├── android
│       ├── build
│       ├── everynet_desktop.iml
│       ├── ios
│       ├── lib
│       ├── linux
│       ├── macos
│       ├── pubspec.lock
│       ├── pubspec.yaml
│       ├── test
│       ├── web
│       └── windows
├── Dockerfile                             Contains instructions to dockerize the project.
├── controllers
│   ├── contentController.js               Handles content-related operations.
│   ├── networkController.js               Handles network-related operations.
│   ├── nodeController.js                  Handles node-related operations.
│   └── userController.js                  Contains logic for user-related operations.
├── data
│   ├── ...                                Contains the MongoDB files and directories.
│   ├── diagnostic.data
│   │   ├── ...                            Contains diagnostic data for MongoDB.
│   └── journal
│       ├── ...                            Contains MongoDB journal files.
├── database.js                            Handles connection to the database.
├── package-lock.json                      Records an exact version of project dependencies to ensure consistency.
├── package.json                           Contains the list of project dependencies and other metadata.
├── src
│   ├── models
│   │   ├── contentModel.js                Defines the Content model for the database.
│   │   ├── networkModel.js                Defines the Network model for the database.
│   │   ├── nodeModel.js                   Defines the Node model for the database.
│   │   └── userModel.js                   Defines the User model for the database.
│   ├── routes
│   │   ├── auth.js                        Defines authentication routes.
│   │   ├── contentRoutes.js               Defines routes for content-related operations.
│   │   ├── networkRoutes.js               Defines routes for network-related operations.
│   │   ├── nodeRoutes.js                  Defines routes for node-related operations.
│   │   └── userRoutes.js                  Defines routes for user-related operations.
│   └── server.js                          Entry point to the application, starts the server.
├── tokenGenerator.js                      Handles the generation of authentication tokens.
└── utils                                  Contains utility functions used across the project.
</pre>

<h2 id="checkered_flag-getting-started">:checkered_flag: Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>

<ul>
  <li>Node.js 14.x or higher</li>
  <li>Python 3.8 or higher</li>
  <li>Windows, macOS, or Linux operating system</li>
</ul>

<h3 id="installation">Installation</h3>

<ol>
  <li>Clone the repository:<br><code>git clone https://github.com/JacquelineDMcGraw/everynet.git</code></li>
  <li>Navigate into the project directory:<br><code>cd everynet</code></li>
  <li>Install the dependencies:<br><code>npm install</code></li>
  <li>Start the project:<br><code>npm start</code></li>
</ol>

<h3 id="configuration">Configuration</h3>

<p>Before starting, make sure to configure the application according to your needs. Update the <code>config.js</code> file located in the root directory.</p>

<h2 id="handshake-contributing">:handshake: Contributing</h2>

<p>Contributions are welcome! See the <a href="https://github.com/JacquelineDMcGraw/everynet/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> file for more information.</p>

<h2 id="book-documentation">:book: Documentation</h2>

<p>For more detailed information about the project and how to use it, see the <a href="https://github.com/JacquelineDMcGraw/everynet/wiki">documentation</a>.</p>

<h2 id="question-need-help">:question: Need Help?</h2>

<p>If you need help, please <a href="https://github.com/JacquelineDMcGraw/everynet/issues/new">open an issue</a> or contact me at <a href="mailto:support@example.com">support@example.com</a>.</p>

<h2 id="trophy-acknowledgements">:trophy: Acknowledgements</h2>

<p>Acknowledgements to contributors, partners, etc.</p>

<h2 id="balance_scale-license">:balance_scale: License</h2>

<p>EveryNet is licensed under the <a href="https://github.com/JacquelineDMcGraw/everynet/blob/main/LICENSE">MIT License</a>.</p>