import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LotServiceService {

  constructor(private httpClient:HttpClient) { }
  getUnassignedLotList(){
    return this.httpClient.get('https://c-solr6-lv.copart.com/solr/c_asm/select?fq=-current_auction_id%3A%5B1%20TO%20*%5D&fq=current_auction_host_id%3A11&fq=doc_type%3Aasm&fq=lot_status_code%3AREFOL&q.op=OR&q=*%3A*&rows=5');
  }
  getAssignedLotList(){
    return this.httpClient.get('https://c-solr6-lv.copart.com/solr/c_asm/select?fq=current_auction_host_id%3A11&fq=current_auction_id%3A%5B1%20TO%20*%5D&fq=doc_type%3Aasm&fq=lot_status_code%3AREFOL&q.op=OR&q=*%3A*&rows=5');
  }
  getLiveLotList(){
    return this.httpClient.get('https://c-solr6-lv.copart.com/solr/c_asm/select?fq=current_auction_host_id%3A11&fq=doc_type%3Aasm&fq=lot_status_code%3ALIVE&q.op=OR&q=*%3A*&rows=5');
  }
  getBidApprovalList(){
    return this.httpClient.get('https://c-solr6-lv.copart.com/solr/c_asm/select?fq=current_auction_host_id%3A11&fq=doc_type%3Aasm&fq=lot_status_code%3ASOOAP&q.op=OR&q=*%3A*&rows=5');
  }
  getSoldList(){
    return this.httpClient.get('https://c-solr6-lv.copart.com/solr/c_asm/select?fq=current_auction_host_id%3A11&fq=doc_type%3Aasm&fq=lot_status_code%3ASOLD&q.op=OR&q=*%3A*&rows=5');
  }
}
