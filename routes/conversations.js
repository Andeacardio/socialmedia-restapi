const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conversation

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete conversation
router.delete("/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    // const conversation = await Conversation.find({
    //   _id: { $in: [req.params.id] },
    // });
    // console.log(conversation);
    // await conversation.deleteOne();
    await Conversation.findByIdAndDelete(req.params.id);
    res.status(200).json("conversation has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get conv of a user

router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
