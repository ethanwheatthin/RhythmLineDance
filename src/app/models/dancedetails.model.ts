import { Types } from 'mongoose';

class DanceDetails {
  _id: Types.ObjectId;
  music_lower: string;
  dance_count: string;
  dance_name_lower: string;
  music: string;
  dance_steps: string;
  level: string;
  dance_walls: string;
  choreographer: string;
  DanceID: number;
  dance_name: string;
  choreographer_lower: string;
  level_lower: string;

  constructor(
    _id: Types.ObjectId,
    music_lower: string,
    dance_count: string,
    dance_name_lower: string,
    music: string,
    dance_steps: string,
    level: string,
    dance_walls: string,
    choreographer: string,
    DanceID: number,
    dance_name: string,
    choreographer_lower: string,
    level_lower: string
  ) {
    this._id = _id;
    this.music_lower = music_lower;
    this.dance_count = dance_count;
    this.dance_name_lower = dance_name_lower;
    this.music = music;
    this.dance_steps = dance_steps;
    this.level = level;
    this.dance_walls = dance_walls;
    this.choreographer = choreographer;
    this.DanceID = DanceID;
    this.dance_name = dance_name;
    this.choreographer_lower = choreographer_lower;
    this.level_lower = level_lower;
  }
}

export default DanceDetails;
