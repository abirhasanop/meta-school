import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto shadow-xl bg-white rounded-lg p-9'>
            <header>
                <h1 className='text-5xl text-center mb-5 font-semibold'>Blog</h1>
            </header>
            <section>
                <h1 className='text-4xl mb-4'>What is Cors?</h1>
                <div className='text-2xl'>
                    <p>Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </section><br /><br />
            <section>
                <h1 className='text-4xl mb-4'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <div className='text-2xl'>
                    <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Firebase is a good choice if you want to deploy a working product on the cloud rapidly. Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background.Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files.</p><br />
                    <p>The alternatives of fire base are Back4App. Back4app is an open-source, relational, low-code backend platform, Backendless, Kuzzle, Pubnub, Kumulos, Appwrite, Deployd, NHost.</p>
                </div>
            </section><br /><br />
            <section>
                <h1 className='text-4xl mb-4'>How does the private route work?</h1>
                <div className='text-2xl'>
                    <p>The private route component is used to protect selected pages in a React app from unauthenticated users.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). What are protected routes?
                        Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page</p>
                </div>
            </section><br /><br />
            <section>
                <h1 className='text-4xl mb-4'>What is Node? How does Node work?</h1>
                <div className='text-2xl'>
                    <p>Node.js is an open-source, cross-platform,
                        back-end JavaScript runtime environment
                        that runs on the V8 engine and executes
                        JavaScript code outside a web browser.Javascript was always a client side language until node.js.
                        Common server side languages include PHP, Python, Perl, Ruby
                        and several more. Node enables you to use Javascript server side.
                        This now means you can have a consistent language both ends
                        which could not be done prior to Node. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                </div>
            </section><br /><br />
        </div>
    );
};

export default Blog;