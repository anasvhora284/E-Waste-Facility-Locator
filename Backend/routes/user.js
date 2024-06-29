/* eslint-disable no-undef */
const express = require("express");
const { authenticate } = require("../middlewares/auth.js");
const { authorize } = require("../middlewares/authorize.js");
const User = require("../models/user.js");

const router = express.Router();

router.get("/profile", authenticate, (req, res) => {
  res.json({ user: req.user });
});

router.get("/dashboard/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).select(
      "rewardPoints eWasteSubmitted facilitiesVisited extraEWasteSubmitted activityData"
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const dataByTimeframe = user.activityData.reduce((acc, curr) => {
      acc[curr.timeFrame] = {
        rewardPoints: user.rewardPoints,
        eWasteSubmitted: user.eWasteSubmitted,
        facilitiesVisited: user.facilitiesVisited,
        extraEWasteSubmitted: user.extraEWasteSubmitted,
        activityData: curr.data,
      };
      return acc;
    }, {});

    res.json(dataByTimeframe);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/search", authenticate, async (req, res) => {
  try {
    const { criteria } = req.body;

    if (!criteria) {
      return res.status(400).json({ message: "Criteria not provided" });
    }

    const query = {};

    Object.keys(criteria).forEach((field) => {
      if (criteria[field]) {
        if (field === "fromAge" || field === "toAge") {
          query.age = query.age || {};
          query.age[field === "fromAge" ? "$gte" : "$lte"] = parseInt(
            criteria[field]
          );
        } else {
          query[field] = criteria[field];
        }
      }
    });

    // if (criteria.fromAge && criteria.toAge) {
    //   query.age = {
    //     $gte: parseInt(criteria.fromAge),
    //     $lte: parseInt(criteria.toAge),
    //   };
    // }

    // if (criteria.education) {
    //   query.education = criteria.education;
    // }

    // if (criteria.occupation) {
    //   query.occupation = criteria.occupation;
    // }

    // if (criteria.maritalStatus) {
    //   query.maritalStatus = criteria.maritalStatus;
    // }

    // if (criteria.gender) {
    //   query.gender = criteria.gender;
    // }

    const searchResults = await User.find(query);

    res.json({ users: searchResults });
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
