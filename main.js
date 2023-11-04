const axios = require('axios');

async function findOpenGroups() {
  for (let i = 300000; i < 900000; i++) {
    try {
      const group = await axios.get(`https://groups.roproxy.com/v1/groups/${i}`);
      if (group.data.publicEntryAllowed === true && group.data.owner === null) {
        await axios.post('https://discord.com/api/webhooks/1167933381196140544/v4T2b9Nye_bTQqn53_ob1bbigDh9hY-UIOciZizyR6J_0MJWoYgnz4ODKEwgplRbIo8x', {
          content: `Found an open group: https://www.roblox.com/groups/${i}`
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

findOpenGroups();
