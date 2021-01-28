import _track, {
  Track as _Track,
  TrackingInfo,
  TrackingProp,
  useTracking as _useTracking,
} from "react-tracking"
import * as TrackSchema from "./trackSchema"
export { TrackSchema }
/**
 * Useful notes:
 *  * At the bottom of this file there is an example of how to test track'd code.
 */
export interface Track<
  P = any,
  S = null,
  T extends TrackSchema.Global = TrackSchema.Event
> extends _Track<T, P, S> {} // tslint:disable-line:no-empty-interface

/**
 * A typed tracking-info alias of the default react-tracking `track` function.
 *
 * Use this when you don’t use a callback function to generate the tracking-info and only need the global schema.
 *
 * @example
 *
 *      ```ts
 *      import { track } from "lib/utils/track"
 *
 *      @track()
 *      class brand extends React.Component<{}, null> {
 *        render() {
 *          return (
 *            <div onClick={this.handleFollow.bind(this)}>
 *              ...
 *            </div>
 *          )
 *        }
 *
 *        @track({ action: "Follow brand" })
 *        handleFollow() {
 *          // ...
 *        }
 *      }
 *      ```
 */
export const track: Track = _track

export const useTracking: () => TrackingProp<
  TrackingInfo<TrackSchema.Event, null, null>
> = _useTracking
