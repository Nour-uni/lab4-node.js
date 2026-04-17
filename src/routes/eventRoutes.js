// PROFESSIONAL REST ROUTES
import express from "express";
import EventController from "../controllers/eventController.js";
const router = express.Router();

/**
 * @openapi
 * /api/v1/events:
 *   get:
 *     summary: Get all events
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of events
 *   post:
 *     summary: Create new event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               date:
 *                 type: string
 *               location:
 *                 type: string
 *               capacity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Event created successfully
 */
router.get("/", EventController.getAllEvents);
router.post("/", EventController.createEvent);

/**
 * @openapi
 * /api/v1/events/stats:
 *   get:
 *     summary: Get event statistics
 *     responses:
 *       200:
 *         description: Event statistics
 */
router.get("/stats", EventController.getStats);

/**
 * @openapi
 * /api/v1/events/{id}:
 *   get:
 *     summary: Get event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 *   put:
 *     summary: Update an event
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Event updated successfully
 *   delete:
 *     summary: Delete an event
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Event deleted successfully
 */
router.get("/:id", EventController.getEventById);
router.put("/:id", EventController.updateEvent);
router.delete("/:id", EventController.deleteEvent);

export default router;
