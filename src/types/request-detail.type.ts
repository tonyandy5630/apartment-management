import AddOnService from './add-on-services.type'
import Request from './request.type'

export default interface RequestDetail extends Request {
    addOnList: Array<AddOnService>
}
