module.exports = {
  sendContactEmail: async (recipient) => {
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "Hart Agency Contact Request",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: recipient.email,
          },
        },
      ],
      body: {
        content: `          <p>Dear <b>${recipient.name},</b></p>
          <p>
            Thanks for reaching out! We have received your contact request and will get back to you during office hours. </p>
            <p>-Hart Agency Network
          </p>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
  sendContactEmail2Tina: async (recipient) => {
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "New Contact Request",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: "tina@hartagency.net",
          },
        },
      ],
      body: {
        content: `<h1>New Contact Request</h1>
        <p>Name: ${recipient.name}</p>
        <p>Email: ${recipient.email}</p>
        <p>Message: ${recipient.message}</p>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
  sendQuoteConfirm: async (email, name) => {
    console.log(email, name);
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "Hart Agency Quote Inquiry",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: email,
          },
        },
      ],
      body: {
        content: `          <p>Dear <b>${name},</b></p>
          <p>
            Thanks for reaching out! We have received your inquiry for a quote and will get back to you during office hours. </p>
            <p>-Hart Agency Network
          </p>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
  sendInquiry2Tina: async (inquiry) => {
    var json2html = require("json-to-html");
    var inquiryHTML = JSON.stringify(inquiry, null, 2);
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "New Contact Request",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: "tina@hartagency.net",
          },
        },
      ],
      body: {
        content: `<h1>New Inquiry</h1>
        <pre>${inquiryHTML}</pre>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
  sendReferral2Tina: async (referral) => {
    var referralHTML = JSON.stringify(referral, null, 2);
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "New Referral",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: "tina@hartagency.net",
          },
        },
      ],
      body: {
        content: `<h1>New Referral</h1>
        <pre>${referralHTML}</pre>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
  sendContactUpdateReq2Tina: async (input) => {
    var inputHTML = JSON.stringify(input, null, 2);
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "Contact Info Update Request",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: "tina@hartagency.net",
          },
        },
      ],
      body: {
        content: `<h1>Contact Info Update Request</h1>
        <pre>${inputHTML}</pre>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
  sendPolicyChangeReq2Tina: async (input) => {
    var inputHTML = JSON.stringify(input, null, 2);
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "Policy Change Request",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: "tina@hartagency.net",
          },
        },
      ],
      body: {
        content: `<h1>Policy Change Request</h1>
        <pre>${inputHTML}</pre>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
  sendProofReq2Tina: async (input) => {
    var inputHTML = JSON.stringify(input, null, 2);
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "Proof of Insurance Request",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: "tina@hartagency.net",
          },
        },
      ],
      body: {
        content: `<h1>Proof of Insurance Request</h1>
        <pre>${inputHTML}</pre>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
  sendConsultReq2Tina: async (input) => {
    var inputHTML = JSON.stringify(input, null, 2);
    const msal = require("@azure/msal-node");
    const fetch = require("node-fetch");
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const tenantId = process.env.OAUTH_TENANT_ID;
    const aadEndpoint =
      process.env.AAD_ENDPOINT || "https://login.microsoftonline.com";
    const graphEndpoint =
      process.env.GRAPH_ENDPOINT || "https://graph.microsoft.com";

    const msalConfig = {
      auth: {
        clientId,
        clientSecret,
        authority: aadEndpoint + "/" + tenantId,
      },
    };

    const tokenRequest = {
      scopes: [graphEndpoint + "/.default"],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    const mail = {
      subject: "Request for Free Consultation",
      //This "from" is optional if you want to send from group email. For this you need to give permissions in that group to send emails from it.
      from: {
        emailAddress: {
          address: "tina@hartagency.net",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            address: "tina@hartagency.net",
          },
        },
      ],
      body: {
        content: `<h1>Request for Free Consultation</h1>
        <pre>${inputHTML}</pre>`,
        contentType: "html",
      },
    };

    const headers = new fetch.Headers();
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
      graphEndpoint + "/v1.0/users/tina@hartagency.net/sendMail",
      options
    );
  },
};
