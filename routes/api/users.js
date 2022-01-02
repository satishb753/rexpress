import { Router } from 'express';

// User Model
import User from '../../models/User.js';

// import authMiddleware from '../../middleware/auth.js';
import { protect, admin } from '../../middleware/authMiddleware.js';

const router = Router();

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */

router.get('/', protect, admin, async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error('No users exist');
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
